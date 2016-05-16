package com.mawujun.constant;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mawujun.repository.cnd.Cnd;
import com.mawujun.utils.page.Pager;
/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Controller
//@RequestMapping("/codeType")
public class CodeTypeController {

	@Resource
	private CodeTypeService codeTypeService;


	/**
	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
	 * @author mawujun email:16064988@163.com qq:16064988
	 * @param start
	 * @param limit
	 * @param userName
	 * @return
	 */
	@RequestMapping("/codeType/queryPager.do")
	@ResponseBody
	public Pager<CodeType> queryPager(Pager<CodeType> pager){
		return codeTypeService.queryPage(pager);
	}

	@RequestMapping("/codeType/queryAll.do")
	@ResponseBody
	public List<CodeType> queryAll() {	
		List<CodeType> codeTypees=codeTypeService.query(Cnd.select().andLike("", ""));
		return codeTypees;
	}
	

	@RequestMapping("/codeType/load.do")
	@ResponseBody
	public CodeType load(String id) {
		return codeTypeService.get(id);
	}
	
	@RequestMapping("/codeType/create.do")
	@ResponseBody
	public CodeType create(@RequestBody CodeType codeType) {
		codeTypeService.create(codeType);
		return codeType;
	}
	
	@RequestMapping("/codeType/update.do")
	@ResponseBody
	public  CodeType update(@RequestBody CodeType codeType) {
		codeTypeService.update(codeType);
		return codeType;
	}
	
	@RequestMapping("/codeType/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		codeTypeService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/codeType/destroy.do")
	@ResponseBody
	public CodeType destroy(@RequestBody CodeType codeType) {
		codeTypeService.delete(codeType);
		return codeType;
	}
	
	
}
