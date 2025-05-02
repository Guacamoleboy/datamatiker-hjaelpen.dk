public class Recursion {

    // Attributes

    public void callQuestion(){
        question(5);
    }

    // ___________________________________________

    public void question(int number){

        if (number != 0){
            question(number - 1);
            System.out.println(number + " ");
        }

    }

}





