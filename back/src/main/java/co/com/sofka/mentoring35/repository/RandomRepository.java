package co.com.sofka.mentoring35.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import co.com.sofka.mentoring35.entity.Random;

public interface RandomRepository extends ReactiveCrudRepository<Random, String> {
    
}
