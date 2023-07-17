package space.skyhawk.localscan.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "eve_character")
public class EveCharacter {

    @Id
    @Column(name = "characterId")
    int characterId;

    @Column(name = "name")
    String name;

    @ManyToOne
    @JoinColumn(name = "corporationId")
    EveCorporation corporation;

    public int getCharacterId() {
        return this.characterId;
    }

    public String getName() {
        return this.name;
    }

    public EveCorporation getCorporation() {
        return this.corporation;
    }

    public void setCharacterId(int characterId) {
        this.characterId = characterId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCorporation(EveCorporation corporation) {
        this.corporation = corporation;
    }

}
