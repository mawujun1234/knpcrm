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
//@RequestMapping("/source")
public class SourceController {

	@Resource
	private SourceService sourceService;


//	/**
//	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
//	 * @author mawujun email:16064988@163.com qq:16064988
//	 * @param start
//	 * @param limit
//	 * @param userName
//	 * @return
//	 */
//	@RequestMapping("/source/query.do")
//	@ResponseBody
//	public Pager<Source> query(Pager<Source> pager){
//		return sourceService.queryPage(pager);
//	}

	@RequestMapping("/source/query.do")
	@ResponseBody
	public List<Source> query() {	
		List<Source> sourcees=sourceService.queryAll();
		return sourcees;
	}
	

	@RequestMapping("/source/load.do")
	@ResponseBody
	public Source load(String id) {
		return sourceService.get(id);
	}
	
	@RequestMapping("/source/create.do")
	@ResponseBody
	public Source create(@RequestBody Source source) {
		sourceService.create(source);
		return source;
	}
	
	@RequestMapping("/source/update.do")
	@ResponseBody
	public  Source update(@RequestBody Source source) {
		sourceService.update(source);
		return source;
	}
	
	@RequestMapping("/source/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		sourceService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/source/destroy.do")
	@ResponseBody
	public Source destroy(@RequestBody Source source) {
		sourceService.delete(source);
		return source;
	}
	
	
}
