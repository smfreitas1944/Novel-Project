package com.novel.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.novel.models.Characters;
import com.novel.repos.CharacterRepo;

@Service
@Transactional
public class CharacterServiceImpl implements CharacterService {
	@Autowired
	private CharacterRepo characterRepo;
	
	@Override
	public List<Characters> getAllCharacters(){
		return characterRepo.findAllCharacters();
	}

	@Override
	public List<Characters> getCharactersByNovel(String novel){
		return characterRepo.findCharactersByNovel(novel);
	}
	
	// crud operations here
	
	public boolean insertCharacter(String CharacterName, String CharacterRole, String CharacterRace, int CharacterAge, String CharacterGender) {
		return characterRepo.insertCharacter(CharacterName, CharacterRole, CharacterRace, CharacterAge, CharacterGender);
	}

	public boolean deleteCharacterById(int CharacterId) {
		return characterRepo.deleteCharacterById(CharacterId);
	}
}
