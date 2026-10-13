/*============================================
Portfolio Gallery
Opens #gallery-modal with the screenshots of a card that has data-gallery="<key>"
==============================================*/
$(function () {

	var GALLERIES = {
		taxi: {
			title: 'Taxi Tracker',
			images: [
				{ src: 'assets/portfolio/taxi/01-consola-mapa.jpg', caption: 'Consola central: flota en vivo sobre el mapa' },
				{ src: 'assets/portfolio/taxi/02-consola-servicios.jpg', caption: 'Cola de servicios en curso' },
				{ src: 'assets/portfolio/taxi/03-consola-zonas.jpg', caption: 'Zonas de cobertura' },
				{ src: 'assets/portfolio/taxi/04-consola-conductores.jpg', caption: 'Administración de conductores' },
				{ src: 'assets/portfolio/taxi/05-hotel-seguimiento.jpg', caption: 'Portal del hotel: taxi en camino' },
				{ src: 'assets/portfolio/taxi/06-hotel-pedir.jpg', caption: 'Portal del hotel: pedir un taxi' },
				{ src: 'assets/portfolio/taxi/07-huesped.jpg', caption: 'Enlace de seguimiento para el huésped' }
			]
		},
		riesgos: {
			title: 'Asistente de evaluación de riesgo crediticio',
			images: [
				{ src: 'assets/portfolio/riesgos/01-bandeja.jpg', caption: 'Bandeja de revisión del analista' },
				{ src: 'assets/portfolio/riesgos/02-proceso.jpg', caption: 'Flujo: IA, motor de política y analista' },
				{ src: 'assets/portfolio/riesgos/03-camunda-operate.jpg', caption: 'Proceso BPMN en Camunda Operate' },
				{ src: 'assets/portfolio/riesgos/04-expediente.jpg', caption: 'Expediente con ingreso verificado' },
				{ src: 'assets/portfolio/riesgos/05-observaciones.jpg', caption: 'Observaciones y capacidad de pago (DMN)' }
			]
		},
		chatbot: {
			title: 'Chatbot de WhatsApp con IA',
			images: [
				{ src: 'assets/portfolio/chatbot/01-inicio.jpg', caption: 'Panel del negocio: resumen del día' },
				{ src: 'assets/portfolio/chatbot/02-catalogo.jpg', caption: 'Catálogo que el bot ofrece por WhatsApp' },
				{ src: 'assets/portfolio/chatbot/03-entradas.jpg', caption: 'Venta de entradas con ticket QR' },
				{ src: 'assets/portfolio/chatbot/04-pagos.jpg', caption: 'Pagos recibidos por el bot' },
				{ src: 'assets/portfolio/chatbot/05-mesas.jpg', caption: 'Mapa y reserva de mesas' }
			]
		}
	};

	var $modal = $('#gallery-modal');
	if (!$modal.length) return;

	var $img = $modal.find('.gallery-modal__img');
	var $caption = $modal.find('.gallery-modal__caption');
	var $counter = $modal.find('.gallery-modal__counter');
	var $title = $modal.find('#gallery-modal-title');
	var current = null;
	var index = 0;

	function show(i) {
		var images = current.images;
		index = (i + images.length) % images.length;
		$img.attr({ src: images[index].src, alt: images[index].caption });
		$caption.text(images[index].caption);
		$counter.text((index + 1) + ' / ' + images.length);
	}

	$('[data-gallery] .portfolio-card__thumb').on('click', function (e) {
		e.preventDefault();
		current = GALLERIES[$(this).closest('[data-gallery]').data('gallery')];
		if (!current) return;
		$title.text(current.title);
		show(0);
		$modal.modal('show');
	});

	$modal.find('.gallery-modal__prev').on('click', function () { show(index - 1); });
	$modal.find('.gallery-modal__next').on('click', function () { show(index + 1); });

	$(document).on('keydown', function (e) {
		if (!current || !$modal.hasClass('in')) return;
		if (e.which === 37) show(index - 1);
		if (e.which === 39) show(index + 1);
	});

});
