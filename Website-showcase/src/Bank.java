public class Person {
    String navn;
    int alder;

    public Person(String navn, int alder) {
        this.navn = navn;
        this.alder = alder;
    }

    @Override
    public String toString() {
        return navn + " er " + alder + " år gammel.";
    }
}