import React from "react";
import _ from "lodash";
import {ITypingLine} from "./TextConvertTypingData";
import {playKeyPressSound, playWrongSound} from "./PlayTypingSound";
import {ICursorLocation, ITypingRecord} from "../TypingScript";
import {checkPressKeyKind} from "../../../../common/Util";

const typingEvent = (e: KeyboardEvent,
                            cursorLocationRef: React.MutableRefObject<ICursorLocation>,
                            typingLinesRef: React.MutableRefObject<ITypingLine[]>,
                            typingRecordsRef: React.MutableRefObject<ITypingRecord[]>) => {
    const pressKey = e.key;
    const checkKey = checkPressKeyKind(pressKey)
    playKeyPressSound();

    // 기능키, 스페이스 바, 엔터키 동작 방지(스크롤 등)
    if (checkKey.isModifyKey || checkKey.isEnterKey || checkKey.isSpaceKey) e.preventDefault();

    // 1. 입력 부분
    if (checkKey.isCharacterKey || checkKey.isEnterKey || checkKey.isSpaceKey) {
        const {nextCursorLocation, isMoveWord, isMoveLine}
            = moveCursorNextLocation(cursorLocationRef.current, typingLinesRef.current);
        // 1.1. 단어 마지막 아닌 경우
        if (!isMoveWord) {
            const isPressCollectKey
                = completeChar(pressKey, cursorLocationRef.current, nextCursorLocation, typingLinesRef.current);
            if (!isPressCollectKey) playWrongSound();

            // TODO: 분리
            typingRecordsRef.current = _.concat(typingRecordsRef.current, {
                target: findTargetKey(cursorLocationRef.current, typingLinesRef.current),
                input: pressKey,
                isRight: isPressCollectKey,
                time: _.now(),
            })

            cursorLocationRef.current = nextCursorLocation;
        } else {
            // 1.2. 단어 마지막인 경우
            //      엔터 & 해당 줄의 마지막 단어 || 스페이스 & 해당 줄의 마지막 단어 X
            if ((!isMoveLine && checkKey.isSpaceKey) ||
                (isMoveLine && checkKey.isEnterKey)) {

                // TODO: 분리
                let target = isMoveLine ? " " : "Enter";
                typingRecordsRef.current = _.concat(typingRecordsRef.current, {
                    target,
                    input: pressKey,
                    isRight: target === pressKey,
                    time: _.now(),
                })

                completeWord(cursorLocationRef.current, typingLinesRef.current);
                cursorLocationRef.current = nextCursorLocation;
            } else {
                playWrongSound();
                return;
            }
        }

        if (checkCursorLocation(typingLinesRef.current).isLineEnd(nextCursorLocation, -1)) {
            console.log("끝")
            return;
        }
        // 2. 삭제 부분
    } else if (checkKey.isRemoveKey) {
        typingRecordsRef.current = _.concat(typingRecordsRef.current, {
            input: pressKey,
            time: _.now(),
        })

        deleteChar(typingLinesRef, cursorLocationRef.current, cursorLocationRef);
    }

    console.log(typingRecordsRef.current)
}



const checkCursorLocation = (typingLines: ITypingLine[]) => {
    return {
        isLineEnd:
            (cursorLocation: ICursorLocation, addIndex = 0) =>
                cursorLocation.lineIndex + addIndex === typingLines.length,
        isWordEnd:
            (cursorLocation: ICursorLocation, addIndex = 0) =>
                cursorLocation.wordIndex + addIndex === (typingLines[cursorLocation.lineIndex].words.length),
        isCharEnd:
            (cursorLocation: ICursorLocation) =>
                cursorLocation.charIndex ===
                typingLines[cursorLocation.lineIndex].words[cursorLocation.wordIndex].chars.length,
    }
}

const moveCursorNextLocation = (cursorLocation: ICursorLocation, typingLines: ITypingLine[]) => {
    const nextCursorLocation = _.clone(cursorLocation);
    let isMoveWord = false;
    let isMoveLine = false;

    let cursorCheck = checkCursorLocation(typingLines);
    if (!cursorCheck.isCharEnd(nextCursorLocation)) {
        nextCursorLocation.charIndex++;
    } else {
        nextCursorLocation.charIndex = 0;
        nextCursorLocation.wordIndex++;
        isMoveWord = true;
        if (cursorCheck.isWordEnd(nextCursorLocation)) {
            nextCursorLocation.wordIndex = 0;
            nextCursorLocation.lineIndex++;
            isMoveLine = true;
        }
    }
    return {nextCursorLocation, isMoveWord, isMoveLine};
}

const completeWord = (cursorLocation: ICursorLocation, typingLines: ITypingLine[]) => {
    // 단어 체크
    if (typingLines[cursorLocation.lineIndex].words[cursorLocation.wordIndex].chars.find((char => char.origin !== char.input)))
        typingLines[cursorLocation.lineIndex].words[cursorLocation.wordIndex].ref.className = "word incollect"
    else typingLines[cursorLocation.lineIndex].words[cursorLocation.wordIndex].ref.className = "word collect"
    // 단어 마지막에 위치한 엔터, 스페이스 바 특수문자 제거
    typingLines[cursorLocation.lineIndex].words[cursorLocation.wordIndex].ref.lastElementChild!.textContent = "";
}


const findTargetKey = (cursorLocation: ICursorLocation, typingLines: ITypingLine[]) => {
    return typingLines[cursorLocation.lineIndex].words[cursorLocation.wordIndex].chars[cursorLocation.charIndex].origin;
}

const completeChar = (pressKey: string, currentCursorLocation: ICursorLocation, nextCursorLocation: ICursorLocation, typingLines: ITypingLine[]) => {
    let cursorCheck = checkCursorLocation(typingLines);
    const isPressCollectKey = pressKey === findTargetKey(currentCursorLocation, typingLines);
    typingLines[currentCursorLocation.lineIndex].words[currentCursorLocation.wordIndex].chars[currentCursorLocation.charIndex].input = pressKey;
    // 입력된 문자 색상 변경
    typingLines[currentCursorLocation.lineIndex].words[currentCursorLocation.wordIndex].chars[currentCursorLocation.charIndex].ref.className = isPressCollectKey ? "char collect" : "char incollect";
    // 마지막인 경우 공백에 엔터, 스페이스 바 붙임
    if (cursorCheck.isCharEnd(nextCursorLocation)) {
        const lastIndent = typingLines[nextCursorLocation.lineIndex].words[nextCursorLocation.wordIndex].ref.lastElementChild!;
        lastIndent.textContent = cursorCheck.isWordEnd(nextCursorLocation, 1) ? "↓" : "_";  // 엔터 표시 붙이기
    }
    return isPressCollectKey;
}


const deleteChar = (typingLinesRef: React.MutableRefObject<ITypingLine[]>, currentCursorLocation: ICursorLocation, cursorLocationRef: React.MutableRefObject<ICursorLocation>) => {
    let cursorCheck = checkCursorLocation(typingLinesRef.current);
    if (cursorCheck.isCharEnd(currentCursorLocation)) {
        typingLinesRef.current[currentCursorLocation.lineIndex].words[currentCursorLocation.wordIndex].ref.lastElementChild!.textContent = ""
    }
    if (currentCursorLocation.charIndex > 0) {
        currentCursorLocation.charIndex--;
        typingLinesRef.current[currentCursorLocation.lineIndex].words[currentCursorLocation.wordIndex].chars[currentCursorLocation.charIndex].ref.className = "char";
        typingLinesRef.current[currentCursorLocation.lineIndex].words[currentCursorLocation.wordIndex].chars[currentCursorLocation.charIndex].input = undefined;
        cursorLocationRef.current = currentCursorLocation;
    } else {
        return;
    }
    // 커서 위치 반영
    cursorLocationRef.current = currentCursorLocation;
}

export default typingEvent