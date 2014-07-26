﻿Wotg_Plugins.get().addSimplePlugin('KISS', '0.2.2', function (api) {

﻿	api.events.add('beforeLaunch', function () {
		//SET SIZE
		//Art
		Wotg.Card.Markup.Big.markup.children[0].rect = [25, 85, 347, 290];
		//Type
		Wotg.Card.Markup.Big.markup.children[11].rect = [75, 25, 51, 61];
		//Title
		Wotg.Card.Markup.Big.markup.children[5].rect = [125, 28, 228, 30];
		//Description
		Wotg.Card.Markup.Big.markup.children[6].rect = [125, 59, 241, 22];
		//Power
		Wotg.Card.Markup.Big.markup.children[14].rect = [19, 385, 75, 75];
		//Toughness
		Wotg.Card.Markup.Big.markup.children[15].rect = [25, 465, 61, 75];
		//Text
		//TODO: Hell of a lot to do
		Wotg.Card.Markup.Big.markup.children[9].rect = [72, 375, 290, 160];
﻿	});

	api.refactor( 'Wotg.Images.PreLoader', {
		preload: function (onComplete) {
			//Replace Frame
			Wotg.Images.PreLoader.list['dava-card'] = 'http://s7.hostingkartinok.com/uploads/images/2014/07/2e9eb6c827ba07ca73690203af5ca02f.png';
			//Replace Icons
			Wotg.Images.PreLoader.list['dava-card-icons'] = 'http://s7.hostingkartinok.com/uploads/images/2014/07/331909e2d0461ea9e42f71e717fe4c79.png';
			return this.preloader = this.makePreloader( Wotg.Images.PreLoader.list, onComplete );
		},
	});
	
	api.refactor( 'Wotg.Card.Views.Big',  {
	
		redraw: function method () {
			//Hide NationFlag
			this.hide('NationFlag');
			method.previous.apply( this, arguments );
		}
	
	});	

});
