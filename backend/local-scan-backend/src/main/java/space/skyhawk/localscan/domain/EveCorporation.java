package space.skyhawk.localscan.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "eve_corporation")
public class EveCorporation {

    @Id
    @Column(name = "corporationId")
    int corporationId;

    @Column(name = "ticker", length = 5)
    String ticker;

    @Column(name = "name", length = 50)
    String name;

    @OneToMany(mappedBy = "corporation")
    Set<EveCharacter> members;

    @ManyToOne
    @JoinColumn(name = "allianceId")
    EveAlliance alliance;

    //Write getter & setter statements for class fields

}
