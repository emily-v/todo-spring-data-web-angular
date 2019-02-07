package com.spark.web.webdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@Controller // a component that will process an http request
//@ResponseBody
@EnableTransactionManagement // boot will look for @Transactional
@EnableJpaRepositories // boot will look for @Repository
public class WebDemoApplication {

//	@RequestMapping(path="/message", method={RequestMethod.GET, RequestMethod.POST})
//	@GetMapping()
//	@ResponseBody
//	public String getMessage() {
//		return "Hello, REST API";
//	}



	public static void main(String[] args) {
		SpringApplication.run(WebDemoApplication.class, args);
	}

}

