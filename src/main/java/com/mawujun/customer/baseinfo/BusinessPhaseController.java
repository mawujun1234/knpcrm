package com.mawujun.customer.baseinfo;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mawujun.utils.page.Pager;
/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Controller
//@RequestMapping("/businessPhase")
public class BusinessPhaseController {

	@Resource
	private BusinessPhaseService businessPhaseService;


//	/**
//	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
//	 * @author mawujun email:16064988@163.com qq:16064988
//	 * @param start
//	 * @param limit
//	 * @param userName
//	 * @return
//	 */
//	@RequestMapping("/businessPhase/query.do")
//	@ResponseBody
//	public Pager<BusinessPhase> query(Pager<BusinessPhase> pager){
//		return businessPhaseService.queryPage(pager);
//	}

	@RequestMapping("/businessPhase/query.do")
	@ResponseBody
	public List<BusinessPhase> query() {	
		List<BusinessPhase> businessPhasees=businessPhaseService.queryAll();
		return businessPhasees;
	}
	

	@RequestMapping("/businessPhase/load.do")
	@ResponseBody
	public BusinessPhase load(String id) {
		return businessPhaseService.get(id);
	}
	
	@RequestMapping("/businessPhase/create.do")
	@ResponseBody
	public BusinessPhase create(@RequestBody BusinessPhase businessPhase) {
		businessPhaseService.create(businessPhase);
		return businessPhase;
	}
	
	@RequestMapping("/businessPhase/update.do")
	@ResponseBody
	public  BusinessPhase update(@RequestBody BusinessPhase businessPhase) {
		businessPhaseService.update(businessPhase);
		return businessPhase;
	}
	
	@RequestMapping("/businessPhase/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		businessPhaseService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/businessPhase/destroy.do")
	@ResponseBody
	public BusinessPhase destroy(@RequestBody BusinessPhase businessPhase) {
		businessPhaseService.delete(businessPhase);
		return businessPhase;
	}
	
	
}
