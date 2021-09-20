package com.phamquocduy.ReviewCss.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	@GetMapping(value="/")
	public String home() {
		return "index";
	}
	
	@GetMapping(value="/lesson2")
	public String lesson2() {
		return "lesson2";
	}
	
	@GetMapping(value="/lesson3vs4")
	public String lesson3vs4() {
		return "lesson3vs4";
	}
	
	@GetMapping(value="/lesson5")
	public String lesson5() {
		return "lesson5";
	}
	
	@GetMapping(value="/lesson6")
	public String lesson6() {
		return "lesson6";
	}
	
	@GetMapping(value="/lesson7")
	public String lesson7() {
		return "lesson7";
	}
	
	@GetMapping(value="/lesson8")
	public String lesson8() {
		return "lesson8";
	}
	
	@GetMapping(value="/lesson9")
	public String lesson9() {
		return "lesson9";
	}
}
