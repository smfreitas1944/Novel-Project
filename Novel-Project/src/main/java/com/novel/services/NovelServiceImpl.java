package com.novel.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.novel.models.Novel;
import com.novel.repos.NovelRepo;

@Service
@Transactional
public class NovelServiceImpl implements NovelService {
	@Autowired
	private NovelRepo novelRepo;
	
	@Override
	public List<Novel> getAllNovels() {
		return novelRepo.findAllNovels();
	}
	
	@Override
	public List<Novel> getNovelByName(String name){
		return novelRepo.findNovelByName(name);
	}
	
	@Override
	public List<Novel> getNovelByAuthor(String author){
		return novelRepo.findNovelByAuthor(author);
	}
	
	@Override
	public List<Novel> getNovelByGenre(String genre){
		return novelRepo.findNovelByGenre(genre);
	};
	
	// crud operations here
	@Override
	public boolean insertNovel(String NovelName, String NovelAuthor, String NovelGenre) {
		return novelRepo.insertNovel(NovelName, NovelAuthor, NovelGenre);
	}
	
	@Override
	public boolean deleteNovelById(int NovelId) {
		return novelRepo.deleteNovelById(NovelId);
	}
}
