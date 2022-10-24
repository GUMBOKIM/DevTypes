export const TypingScriptExample =
    `@Entity
public class User {
   private Long userId;
   private String username;
   private String password;
   private String nickname;
   private boolean activated;
   private Set<Authority> authorities;
}
`