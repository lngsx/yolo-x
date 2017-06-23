import s from '../next_config/style';

const IndexPage = () => (
	<div className="sans-serif black-70">
		<section className="mw7 center pa2">
			<h1 className="f-subheadline measure">
				A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
			</h1>
			
			<p className="measure lh-copy">
				Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
			</p>
				
			<p className="measure lh-copy">
				Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
			</p>

		</section>

		<style jsx global>{ s }</style>
	</div>
);

export default IndexPage;
