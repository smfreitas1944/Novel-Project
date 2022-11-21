package com.novel.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "NOVEL")
public class Novel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "novel_id")
	private int NovelID;
	
	@Column(name = "novel_name")
	private String NovelName;
	
	@Column(name = "novel_author")
	private String NovelAuthor;
	
	@Column(name = "novel_genre")
	private String NovelGenre;

}
