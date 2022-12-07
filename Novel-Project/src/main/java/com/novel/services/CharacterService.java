package com.novel.services;

import com.novel.models.Characters;

import java.util.List;


public interface CharacterService {

	List<Characters> getAllCharacters();

	List<Characters> getCharactersByNovel(String CharacterNovel);
	
	// crud operations here
	
	boolean insertCharacter(String CharacterName, String CharacterRole, String CharacterRace, int CharacterAge, String CharacterGender, String CharacterNovel);

	boolean deleteCharacterByNovel(Characters characters);
}
