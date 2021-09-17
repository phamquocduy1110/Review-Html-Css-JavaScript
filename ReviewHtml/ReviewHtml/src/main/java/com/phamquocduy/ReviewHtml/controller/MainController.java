package com.phamquocduy.ReviewHtml.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	@GetMapping(value="/tai-lieu")
	public String tailieu() {
		return "tai-lieu";
	}
	
	@GetMapping(value="/")
	public String home() {
		return "index";
	}
	
	@GetMapping(value="/lesson2")
	public String lesson2() {
		return "lesson2";
	}
	
	@GetMapping(value="/lesson3")
	public String lesson3() {
		return "lesson3";
	}
	
	@GetMapping(value="/lesson4")
	public String lesson4() {
		return "lesson4";
	}
}
