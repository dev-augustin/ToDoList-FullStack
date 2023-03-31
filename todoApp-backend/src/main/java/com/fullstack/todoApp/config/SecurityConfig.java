package com.fullstack.todoApp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration

public class SecurityConfig {

//@Autowired
//public BCryptPasswordEncoder passwordEncoder;


    //    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeHttpRequests()
//                .requestMatchers(HttpMethod.DELETE, "/delete-User/*").hasRole("ADMIN")
//                .requestMatchers(HttpMethod.POST).hasAnyRole("ADMIN", "USER")
//                .requestMatchers(HttpMethod.GET).permitAll()
//                .requestMatchers(HttpMethod.PUT).permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .httpBasic()
//                .and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        return http.build();
//
//    }
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails admin = User.builder()
                .username("admin")
                .password(passwordEncoder().encode("pass"))
                .roles("ADMIN")
                .build();

        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder().encode("user"))
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(admin, user);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers(HttpMethod.POST, "/addUser").permitAll()
                .requestMatchers(HttpMethod.POST, "/addTask").permitAll()
                .requestMatchers(HttpMethod.GET, "/allTasks", "/inCompleteTasks", "/completedTasks").permitAll()
                .requestMatchers(HttpMethod.DELETE, "/deleteTask/*").permitAll()
                .requestMatchers(HttpMethod.PUT, "/updateTask/*").permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();

    }

//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .cors().and()
//                .csrf().disable()
//                .authorizeHttpRequests()
//                .requestMatchers(HttpMethod.POST, "/addUser").permitAll()
//                .requestMatchers(HttpMethod.POST, "/addTask").permitAll()
//                .requestMatchers(HttpMethod.GET, "/allTasks", "/inCompleteTasks", "/completedTasks").permitAll()
//                .requestMatchers(HttpMethod.DELETE, "/deleteTask/*").permitAll()
//                .requestMatchers(HttpMethod.PUT, "/updateTask/*").permitAll()
//                .requestMatchers(
//                        HttpMethod.GET,
//                        "/index*", "/static/**", "/*.js", "/*.json", "/*.ico")
//                .permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin().loginPage("/index.html")
//                .loginProcessingUrl("/perform_login")
//                .defaultSuccessUrl("/", true)
//                .failureUrl("/index.html?error=true")
//                .and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        return http.build();
//
//    }



}
