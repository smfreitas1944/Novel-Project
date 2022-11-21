package com.novel.services;

import com.novel.models.Novel;

import java.util.List;

public interface NovelService {
	List<Novel> getAllNovels();
	
	List<Novel> getNovelByName(String name);
	
	List<Novel> getNovelByAuthor(String author);
	
	List<Novel> getNovelByGenre(String genre);
	
	// crud operations here
	
	boolean insertNovel(String NovelName, String NovelAuthor, String NovelGenre);
	
	boolean deleteNovelById(int NovelId);
}
