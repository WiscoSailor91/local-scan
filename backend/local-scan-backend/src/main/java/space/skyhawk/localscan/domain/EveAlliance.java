package space.skyhawk.localscan.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "eve_alliance")
public class EveAlliance {

    @Id
    @Column(name = "allianceId")
    private int allianceId;

    @Column(name = "ticker", length = 5)
    private String ticker;

    @Column(name = "name", length = 50)
    private String name;

    @OneToMany(mappedBy = "alliance")
    private Set<EveCorporation> memberCorporations;

    //Write getter & setter statements for class fields

}
