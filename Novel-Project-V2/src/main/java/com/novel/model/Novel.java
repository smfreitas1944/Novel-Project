package com.novel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "novel")
public class Novel {
	@Id  //Used to define the primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //used to define the primary key generation strategy
	@Column(name = "novel_id") //annotation is used to define the properties of the column that will be mapped to the annotated field. You can define several properties like name, length, nullable, updateable, etc.
	private int NovelID;
	
	@Column(name = "novel_name")
	private String NovelName;
	
	@Column(name = "novel_author")
	private String NovelAuthor;
	
	@Column(name = "novel_genre")
	private String NovelGenre;
	
	public Novel(String NovelName, String NovelAuthor, String NovelGenre) {
			this.NovelName = NovelName;
			this.NovelAuthor = NovelAuthor;
			this.NovelGenre = NovelGenre;
	}
	
	
	
}
