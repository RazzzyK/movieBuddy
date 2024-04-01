package com.moviebud.MovieBuddy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@SpringBootApplication
public class MovieBuddyApplication {

	//Source of this code https://www.youtube.com/watch?v=KxqlJblhzfI
	public static void main(String[] args) {
		SpringApplication.run(MovieBuddyApplication.class, args);
	}
}
