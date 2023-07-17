package space.skyhawk.localscan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import space.skyhawk.localscan.domain.EveCorporation;

public interface EveCorporationRepository extends JpaRepository<EveCorporation, Integer> {
}
