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
    private int corporationId;

    @Column(name = "ticker", length = 5)
    private String ticker;

    @Column(name = "name", length = 50)
    private String name;

    @OneToMany(mappedBy = "corporation")
    private Set<EveCharacter> members;

    @ManyToOne
    @JoinColumn(name = "allianceId")
    private EveAlliance alliance;

    public int getCorporationId() {
        return this.corporationId;
    }
    public String getTicker() {
        return this.ticker;
    }

    public String getName() {
        return this.name;
    }

    public Set<EveCharacter> getMembers() {
        return this.members;
    }

    public EveAlliance getAlliance() {
        return this.alliance;
    }

    public void setCorporationId(int corporationId) {
        this.corporationId = corporationId;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMembers(Set<EveCharacter> members) {
        this.members = members;
    }

    public void setAlliance(EveAlliance alliance) {
        this.alliance = alliance;
    }

}
