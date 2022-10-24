import React, {useState} from "react";
import * as S from "./LanguageItems.style"
import {LanguageData} from "./ScriptData";
import ScriptModal from "./ScriptModal";

const LanguageItems: React.FC<{ moveNextScene: () => void }> = ({moveNextScene}) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const handleClickItem = (name: string) => {
        return () => {
            if (name === selectedLanguage) setSelectedLanguage(null);
            else setSelectedLanguage(name);
        }
    }

    return (
        <>
            <S.LanguageItemContainer>
                {
                    LanguageData.map(language =>
                        <S.LanguageItemWrapper
                            key={language.name}
                            onClick={handleClickItem(language.name)}
                            isSelected={language.name === selectedLanguage}
                        >
                            <span>{language.name}</span>
                        </S.LanguageItemWrapper>
                    )
                }
                {
                    selectedLanguage &&
                    <ScriptModal language="javascript"
                                 types={["TypeScript", "VanillaJS", "React"]}
                                 handleClickClose={() => setSelectedLanguage(null)}
                    />
                }

            </S.LanguageItemContainer>
        </>
    );
}


export default LanguageItems;