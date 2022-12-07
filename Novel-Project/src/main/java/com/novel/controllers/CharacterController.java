package com.novel.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.novel.dtos.RegisterCharacter;
import com.novel.models.Characters;
import com.novel.services.CharacterService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fictional_character")
@CrossOrigin(origins = { "http://localhost:4200", "http://localhost:3000"} )

public class CharacterController {

    private final CharacterService characterService;

    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }

    @GetMapping
    public ResponseEntity<List<Characters>> getInventory() {
        return ResponseEntity.ok(characterService.getAllCharacters());
    }

    @GetMapping("/fictional_character/{character_novel}")
    @CrossOrigin(methods = RequestMethod.GET, allowedHeaders = "*")
    public List<Characters> getCharactersByNovel(@RequestParam String novel, HttpServletRequest request) {
        return characterService.getCharactersByNovel(novel);
    }
    
    @PostMapping("/fictional_character")
    public void insertCharacter(@RequestBody RegisterCharacter registerRequest) {
       Characters receivedCharacter = new Characters();
       	receivedCharacter.setCharacterName(registerRequest.getCharacter_name());
       	receivedCharacter.setCharacterRole(registerRequest.getCharacter_role());
       	receivedCharacter.setCharacterRace(registerRequest.getCharacter_race());
       	receivedCharacter.setCharacterAge(registerRequest.getCharacter_age());
       	receivedCharacter.setCharacterGender(registerRequest.getCharacter_gender());
       	receivedCharacter.setCharacterNovel(registerRequest.getCharacter_novel());
    }

    @DeleteMapping("/fictional_character/{character_novel}")
    public void deleteCharacterByNovel(@PathVariable("character_novel") Characters novel) {

        characterService.deleteCharacterByNovel(novel);

    }
}
