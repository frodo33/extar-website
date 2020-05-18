import articlePicture from 'assets/about_us/pic_1.jpg';
import articlePicture2 from 'assets/about_us/pic_2.jpg';

export const SETTINGS = {
	contact: {
		title: 'Masz pytania?',
		tip: 'Skontaktuj się z nami lub zostaw kontakt',
		legal: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dicta.',
		number: '123 412 341',
		email: 'qwer@qwer.pl'
	},
	aboutUs: {
		title: 'Dlaczego my?',
		articles: [
			{
				title: 'Lorem ipsum dolor sit amet, consectetur.',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eos quam incidunt voluptatem corrupti aspernatur, dicta atque, explicabo suscipit error id minus consequuntur delectus quae vero repellat. Quia, facilis et ducimus, doloremque eveniet, error soluta, ex distinctio labore repellat nihil exercitationem! Excepturi, repudiandae enim dolorum. Doloribus, itaque totam at corporis?',
				image: articlePicture,
				reverse: false
			},
			{
				title: 'Lorem ipsum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae natus accusantium mollitia quos optio dolorum architecto, ratione enim assumenda est deserunt vitae neque sequi, sunt adipisci, aliquam commodi facere inventore?',
				image: articlePicture2,
				reverse: true
			},
			{
				title: 'Lorem ipsum dolor sit amet, consectetur.',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eos quam incidunt voluptatem corrupti aspernatur, dicta atque, explicabo suscipit error id minus consequuntur delectus quae vero repellat. Quia, facilis et ducimus, doloremque eveniet, error soluta, ex distinctio labore repellat nihil exercitationem! Excepturi, repudiandae enim dolorum. Doloribus, itaque totam at corporis?',
				image: articlePicture,
				reverse: false
			}
		]
	},
	apartments: {
		title: 'Nasze apartamenty'
	},
	benefits: {
		title: 'Jakie korzyści płyną',
		iconsArr: [
			{
				iconName: 'report',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae. Quaerat ullam voluptate unde quos cumque molestiae dolorem quidem officia magnam, sapiente quasi nam labore totam, ea laborum nisi necessitatibus mollitia quae accusantium omnis! Atque in autem animi perspiciatis, eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
			},
			{
				iconName: 'phone',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae. Quaerat ullam voluptate unde quos cum labore totam, ea laborum nisi necessitatibus mollitia quae accusantium omnis! Atque in autem animi perspiciatis, eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
			},
			{
				iconName: 'message',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae.  nisi necessitatibus mollitia quae accusantium omnis! Atque in autem animi perspiciatis, eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
			},
			{
				iconName: 'envelope',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae. , eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
			},
			{
				iconName: 'trash',
				text: 'eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
			}
		]
	},
	homeHeader: {
		title: 'Lorem ipsum dolor sit amet.'
	},
}
