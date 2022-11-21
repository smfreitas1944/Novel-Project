package com.novel.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "FICTIONAL_CHARACTER")
public class Characters {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "character_id")
	private int CharacterID;
	
	@Column(name = "character_name")
	private String CharacterName;
	
	@Column(name = "character_role")
	private String CharacterRole;
	
	@Column(name = "character_race")
	private String CharacterRace;
	
	@Column(name = "character_age")
	private int CharacterAge;
	
	@Column(name = "character_gender")
	private String CharacterGender;
	
	@ManyToOne
	@JoinColumn(name="character_id", referencedColumnName = "novel_id")
	private User user;

}
