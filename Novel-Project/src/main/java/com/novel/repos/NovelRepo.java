package com.novel.repos;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.novel.models.Novel;

@Repository
@Transactional
public interface NovelRepo extends JpaRepository<Novel, Integer>{
	@Query(value = "SELECT * FROM NOVEL", nativeQuery = true)
	List<Novel> findAllNovels();
	
	@Query(value = "SELECT * FROM NOVEL WHERE novel_name=?1", nativeQuery = true)
	List<Novel> findNovelByName(String name);
	
	@Query(value = "SELECT * FROM NOVEL WHERE novel_author=?1", nativeQuery = true)
	List<Novel> findNovelByAuthor(String author);
	
	@Query(value = "SELECT * FROM NOVEL WHERE novel_genre=?1", nativeQuery = true)
	List<Novel> findNovelByGenre(String genre);
	
	// crud operations here
	
	@Query(value = "INSERT INTO NOVEL (novel_name, novel_author, novel_genre) VALUES (?1, ?2, ?3)", nativeQuery = true)
	boolean insertNovel(String NovelName, String NovelAuthor, String NovelGenre);
	
	@Query(value = "DELETE FROM NOVEL WHERE novel_name=?1", nativeQuery = true)
	boolean deleteNovelByName(String NovelName);
}
