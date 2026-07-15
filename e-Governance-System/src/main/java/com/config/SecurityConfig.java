package com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Autowired
    private JwtFilter jwtFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http)
            throws Exception {

        http
            .cors()
            .and()
            .csrf().disable()

            .authorizeRequests()

            .antMatchers(HttpMethod.OPTIONS, "/**")
            .permitAll()

            .antMatchers(
                    "/E-Governance/login",
                    "/E-Governance/register",
                    "/E-Governance/schemes"
            ).permitAll()

            .antMatchers("/E-Governance/add")
            .hasRole("ADMIN")
            
            .antMatchers("/E-Governance/update-scheme/**")
            .hasRole("ADMIN")
            
            .antMatchers(
            	    "/E-Governance/delete-scheme/**"
            	)
            	.hasRole("ADMIN")
            	
            	
            	.antMatchers("/E-Governance/documents/**")
            	.hasAnyRole("OFFICER", "ADMIN")

            .anyRequest()
            .authenticated()

            .and()

            .addFilterBefore(
                    jwtFilter,
                    UsernamePasswordAuthenticationFilter.class
            );

        return http.build();
    }
}