<?php
get_header();
	
$sidebar_display = get_post_meta( $post->ID, 'andri_sidebar', true ); 

$sidebar_layout = get_theme_mod( 'andri_sidebar', 'sidebar' );

if ( $sidebar_layout == 'fullwidth' ) :
	$class = ' col-md-12';
	
elseif ( $sidebar_display ) :
	$class = ' col-md-12';
	
else :
	$class = ' col-md-9';
	
endif;
	
?>

<div id="primary" class="content-area<?php echo esc_attr($class); ?>">

	<?php do_action( 'breadcrumbs' ); ?>
	
	<main id="main" class="site-main" role="main">

	<?php
		while ( have_posts() ) : the_post();
	
			get_template_part( 'template-parts/content', 'single-tv' );
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
	?>

	</main><!-- #main -->
	
</div><!-- #primary -->

<?php 
if ( $sidebar_display || $sidebar_layout == 'fullwidth' ) :	
else :
	get_sidebar(); 
endif;

get_footer();
