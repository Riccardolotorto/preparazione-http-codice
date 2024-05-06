export class Prenotazione {
    nome: string;
    cognome: string;
    data: string;
    ora: string;
    indirizzo: string;
    email: string;
    telefono: string;
    constructor(nome: string, cognome: string, data: string, ora: string, indirzzo: string, email: string, telefono: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.data = data;
        this.ora = ora;
        this.indirizzo = indirzzo;
        this.email = email;
        this.telefono = telefono;
    }
}