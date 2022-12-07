package com.novel.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.novel.dtos.RegisterCharacter;
import com.novel.dtos.RegisterNovel;
import com.novel.models.Characters;
import com.novel.models.Novel;
import com.novel.services.CharacterService;
import com.novel.services.NovelService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/novel")
@CrossOrigin(origins = { "http://localhost:4200", "http://localhost:3000"} )
public class NovelController {


    private final NovelService novelService;

    public NovelController(NovelService novelService) {
        this.novelService = novelService;
    }

    @GetMapping
    public ResponseEntity<List<Novel>> getInventory() {
        return ResponseEntity.ok(novelService.getAllNovels());
    }

    @GetMapping("/novel/{novel_name}")
    @CrossOrigin(methods = RequestMethod.GET, allowedHeaders = "*")
    public List<Novel> getNovelByName(@RequestParam String name, HttpServletRequest request) {
        return novelService.getNovelByName(name);
    }
    
    @GetMapping("/novel/{novel_author}")
    @CrossOrigin(methods = RequestMethod.GET, allowedHeaders = "*")
    public List<Novel> getNovelByAuthor(@RequestParam String author, HttpServletRequest request) {
        return novelService.getNovelByAuthor(author);
    }
    
    @GetMapping("/novel/{novel_genre}")
    @CrossOrigin(methods = RequestMethod.GET, allowedHeaders = "*")
    public List<Novel> getNovelByGenre(@RequestParam String genre, HttpServletRequest request) {
        return novelService.getNovelByGenre(genre);
    }
    
    @PostMapping("/fictional_character")
    public void insertNovel(@RequestBody RegisterNovel registerRequest) {
       Novel receivedNovel = new Novel();
       	receivedNovel.setNovelName(registerRequest.getNovel_name());
       	receivedNovel.setNovelAuthor(registerRequest.getNovel_author());
       	receivedNovel.setNovelGenre(registerRequest.getNovel_genre());
    }

    @DeleteMapping("/fictional_character/{character_novel}")
    public void deleteNovelbyName(@PathVariable("novel_name") String novel) {

        novelService.deleteNovelByName(novel);

    }
}
