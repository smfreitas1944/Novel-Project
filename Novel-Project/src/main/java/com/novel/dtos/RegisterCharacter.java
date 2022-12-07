package com.novel.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterCharacter {
    private String character_name;
    private String character_role;
    private String character_race;
    private int character_age;
    private String character_gender;
    private String character_novel;

}
