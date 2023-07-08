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

    //Write getter & setter statements for class fields

}
