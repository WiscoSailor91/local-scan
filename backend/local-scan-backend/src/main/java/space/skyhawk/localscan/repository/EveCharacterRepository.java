package space.skyhawk.localscan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import space.skyhawk.localscan.domain.EveCharacter;

public interface EveCharacterRepository extends JpaRepository<EveCharacter, Integer> {
}
