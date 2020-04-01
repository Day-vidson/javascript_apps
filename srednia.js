function srednia_arytmetyczna() {
		var srednia_wynik=0;
		var dodawanie=0;
		var ile_liczb = prompt('Podaj ile ma byc liczb: ');
		for (var i=0; i<ile_liczb ; i++)
		{
			var liczba = prompt('Podaj liczbe: ');
			dodawanie = dodawanie+liczba;
		}
		srednia_wynik = dodawanie/ile_liczb;
        alert("Wynik: "+ srednia_wynik)
    	return srednia_wynik
}

srednia_arytmetyczna()