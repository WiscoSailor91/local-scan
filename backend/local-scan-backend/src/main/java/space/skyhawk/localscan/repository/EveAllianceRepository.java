package space.skyhawk.localscan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import space.skyhawk.localscan.domain.EveAlliance;

public interface EveAllianceRepository extends JpaRepository<EveAlliance, Integer> {
}
