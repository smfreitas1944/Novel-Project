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
		return characterRepo.getAllCharacters();
	}

	@Override
	public List<Characters> getCharactersByNovel(String novel){
		return characterRepo.getCharactersByNovel(novel);
	}
	
	// crud operations here
	@Override
	public boolean insertCharacter(String CharacterName, String CharacterRole, String CharacterRace, int CharacterAge,
			String CharacterGender, String CharacterNovel) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteCharacterByNovel(Characters characters) {
		// TODO Auto-generated method stub
		return false;
	}
}
