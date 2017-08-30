ymaps.ready(init);

function init () {
		
	var myMap = new ymaps.Map("map", {
            center: [55.859032, 37.104355],
            zoom: 14,
			controls: []
        });
		
		myMap.behaviors.disable('scrollZoom');
		
		myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
        		.add('zoomControl', { left: 5, top: 5 }) //Масштаб
        		.add('typeSelector') //Список типов карты
        		.add('mapTools', { left: 35, top: 5 }) // Стандартный набор кнопок
        		.add('searchControl'); // Строка с поиском
				
		/* Создаем кастомные метки */
	    myPlacemark = new ymaps.Placemark([55.859837,37.108335], {
				balloonContent: 'Адес: Московская обл., Истринский р-н, Дедовск, Гагарина ул. 34'
	        }, {
				preset: 'islands#icon',
				iconColor: '#0095b6'
	        }
		);
		
		/* Добавляем */
	    myMap.geoObjects.add(myPlacemark);
}       