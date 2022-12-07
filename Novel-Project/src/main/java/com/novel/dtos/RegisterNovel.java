package com.novel.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterNovel {
    private String novel_name;
    private String novel_author;
    private String novel_genre;

}
