package com.mawujun.customer.continent;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mawujun.repository.cnd.Cnd;
import com.mawujun.utils.M;
/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Controller
//@RequestMapping("/country")
public class CountryController {

	@Resource
	private CountryService countryService;


//	/**
//	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
//	 * @author mawujun email:16064988@163.com qq:16064988
//	 * @param start
//	 * @param limit
//	 * @param userName
//	 * @return
//	 */
//	@RequestMapping("/country/query.do")
//	@ResponseBody
//	public Pager<Country> query(Pager<Country> pager
//		,String name
//		){
//		pager.addParam("name",  name);
//		return countryService.queryPage(pager);
//	}

	@RequestMapping("/country/query.do")
	@ResponseBody
	public List<Country> query(String name) {	
		List<Country> country=countryService.query(Cnd.select().andLike(M.Continent.name, name));
		return country;
	}
	

	@RequestMapping("/country/load.do")
	public Country load(String id) {
		return countryService.get(id);
	}
	
	@RequestMapping("/country/create.do")
	//@ResponseBody
	public Country create(@RequestBody Country country) {
		countryService.create(country);
		return country;
	}
	
	@RequestMapping("/country/update.do")
	//@ResponseBody
	public  Country update(@RequestBody Country country) {
		countryService.update(country);
		return country;
	}
	
	@RequestMapping("/country/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		countryService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/country/destroy.do")
	//@ResponseBody
	public Country destroy(@RequestBody Country country) {
		countryService.delete(country);
		return country;
	}
	
	
}
