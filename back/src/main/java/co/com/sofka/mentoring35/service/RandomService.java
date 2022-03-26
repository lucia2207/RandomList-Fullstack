package co.com.sofka.mentoring35.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.sofka.mentoring35.entity.Random;
import co.com.sofka.mentoring35.repository.RandomRepository;
import reactor.core.publisher.Mono;

@Service
public class RandomService {
    @Autowired
    private RandomRepository randomRepository;

    public Mono<Random> getById (String id) {
        return randomRepository.findById(id);
    }

    public Mono<Random> delete(String id) {
        Mono<Random> dbRandom = getById(id);

        if (Objects.isNull(dbRandom)) {
            return Mono.empty();
        }

        return getById(id)
            .switchIfEmpty(Mono.empty())
            .filter(Objects::nonNull)
            .flatMap((borrar) -> randomRepository.delete(borrar).then(Mono.just(borrar)));
    }
}