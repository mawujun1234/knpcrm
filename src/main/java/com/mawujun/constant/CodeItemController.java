package com.mawujun.constant;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mawujun.repository.cnd.Cnd;
import com.mawujun.utils.M;
import com.mawujun.utils.page.Pager;
/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Controller
//@RequestMapping("/codeItem")
public class CodeItemController {

	@Resource
	private CodeItemService codeItemService;


	/**
	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
	 * @author mawujun email:16064988@163.com qq:16064988
	 * @param start
	 * @param limit
	 * @param userName
	 * @return
	 */
	@RequestMapping("/codeItem/queryPager.do")
	@ResponseBody
	public Pager<CodeItem> queryPager(Pager<CodeItem> pager){
		return codeItemService.queryPage(pager);
	}

	@RequestMapping("/codeItem/queryAll.do")
	@ResponseBody
	public List<CodeItem> queryAll(String codeType_id,String code,String name) {	
		List<CodeItem> codeItemes=codeItemService.query(Cnd.select().andEquals(M.CodeItem.codeType_id, codeType_id).andLikeIf(M.CodeItem.code, code).andLikeIf(M.CodeItem.name, name));
		return codeItemes;
	}
	

	@RequestMapping("/codeItem/load.do")
	@ResponseBody
	public CodeItem load(String id) {
		return codeItemService.get(id);
	}
	
	@RequestMapping("/codeItem/create.do")
	@ResponseBody
	public CodeItem create(@RequestBody CodeItem codeItem) {
		codeItemService.create(codeItem);
		return codeItem;
	}
	
	@RequestMapping("/codeItem/update.do")
	@ResponseBody
	public  CodeItem update(@RequestBody CodeItem codeItem) {
		codeItemService.update(codeItem);
		return codeItem;
	}
	
	@RequestMapping("/codeItem/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		codeItemService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/codeItem/destroy.do")
	@ResponseBody
	public CodeItem destroy(@RequestBody CodeItem codeItem) {
		codeItemService.delete(codeItem);
		return codeItem;
	}
	
	
}
