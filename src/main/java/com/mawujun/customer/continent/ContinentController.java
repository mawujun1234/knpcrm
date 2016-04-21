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
//@RequestMapping("/continent")
public class ContinentController {

	@Resource
	private ContinentService continentService;


//	/**
//	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
//	 * @author mawujun email:16064988@163.com qq:16064988
//	 * @param start
//	 * @param limit
//	 * @param userName
//	 * @return
//	 */
//	@RequestMapping("/continent/query.do")
//	@ResponseBody
//	public Pager<Continent> query(Pager<Continent> pager,String name){
//		pager.addParam("name",  name);
//		return continentService.queryPage(pager);
//	}

	@RequestMapping("/continent/query.do")
	@ResponseBody
	public List<Continent> query(String name) {	
		List<Continent> continentes=continentService.queryAll();
		return continentes;
	}
	

	@RequestMapping("/continent/load.do")
	@ResponseBody
	public Continent load(String id) {
		return continentService.get(id);
	}
	
	@RequestMapping("/continent/create.do")
	@ResponseBody
	public Continent create(@RequestBody Continent continent) {
		continentService.create(continent);
		return continent;
	}
	
	@RequestMapping("/continent/update.do")
	@ResponseBody
	public  Continent update(@RequestBody Continent continent) {
		continentService.update(continent);
		return continent;
	}
	
	@RequestMapping("/continent/deleteById.do")
	@ResponseBody
	public String deleteById(String id) {
		continentService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/continent/destroy.do")
	@ResponseBody
	public Continent destroy(@RequestBody Continent continent) {
		continentService.delete(continent);
		return continent;
	}
	
	
}
