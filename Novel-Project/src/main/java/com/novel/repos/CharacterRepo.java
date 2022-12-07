package com.novel.repos;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.novel.models.Characters;

import java.util.List;

@Repository
@Transactional
public interface CharacterRepo extends JpaRepository<Characters, Integer>{
	@Query(value = "SELECT * FROM FICTIONAL_CHARACTER", nativeQuery = true)
	List<Characters> getAllCharacters();
	
	@Query(value = "SELECT * FROM FICTIONAL_CHARACTER WHERE character_novel=?1", nativeQuery = true)
	List<Characters> getCharactersByNovel(String character_novel);
	
	// crud operations here
	
	@Query(value = "INSERT INTO FICTIONAL_CHARACTER (character_name, character_role, character_race, character_age, character_gender, character_novel) VALUES (?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
	boolean insertCharacter(String CharacterName, String CharacterRole, String CharacterRace, int CharacterAge, String CharacterGender, String CharacterNovel);
	
	@Query(value = "DELETE FROM FICTIONAL_CHARACTER WHERE character_novel=?1", nativeQuery = true)
	boolean deleteCharacterByNovel(Characters characters);
}
