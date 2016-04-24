package com.mawujun.customer.baseinfo;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Controller
//@RequestMapping("/property")
public class PropertyController {

	@Resource
	private PropertyService propertyService;


	@RequestMapping("/property/query.do")
	@ResponseBody
	public List<Property> query() {	
		List<Property> propertyes=propertyService.queryAll();
		return propertyes;
	}
	

	@RequestMapping("/property/load.do")
	@ResponseBody
	public Property load(String id) {
		return propertyService.get(id);
	}
	
	@RequestMapping("/property/create.do")
	@ResponseBody
	public Property create(@RequestBody Property property) {
		propertyService.create(property);
		return property;
	}
	
	@RequestMapping("/property/update.do")
	@ResponseBody
	public  Property update(@RequestBody Property property) {
		propertyService.update(property);
		return property;
	}
	
	@RequestMapping("/property/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		propertyService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/property/destroy.do")
	@ResponseBody
	public Property destroy(@RequestBody Property property) {
		propertyService.delete(property);
		return property;
	}
	
	
}
