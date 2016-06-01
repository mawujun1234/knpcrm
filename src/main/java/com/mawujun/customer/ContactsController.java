package com.mawujun.customer;
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
//@RequestMapping("/contacts")
public class ContactsController {

	@Resource
	private ContactsService contactsService;


	/**
	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
	 * @author mawujun email:16064988@163.com qq:16064988
	 * @param start
	 * @param limit
	 * @param userName
	 * @return
	 */
	@RequestMapping("/contacts/queryPager.do")
	@ResponseBody
	public Pager<Contacts> queryPager(Pager<Contacts> pager){
		return contactsService.queryPage(pager);
	}

	@RequestMapping("/contacts/queryAll.do")
	@ResponseBody
	public List<Contacts> queryAll() {	
		List<Contacts> contactses=contactsService.queryAll();
		return contactses;
	}
	

	@RequestMapping("/contacts/load.do")
	@ResponseBody
	public Contacts load(String id) {
		return contactsService.get(id);
	}
	
	@RequestMapping("/contacts/create.do")
	@ResponseBody
	public Contacts create(@RequestBody Contacts contacts) {
		contactsService.create(contacts);
		return contacts;
	}
	
	@RequestMapping("/contacts/update.do")
	@ResponseBody
	public  Contacts update(@RequestBody Contacts contacts) {
		contactsService.update(contacts);
		return contacts;
	}
	
	@RequestMapping("/contacts/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		contactsService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/contacts/destroy.do")
	@ResponseBody
	public Contacts destroy(@RequestBody Contacts contacts) {
		contactsService.delete(contacts);
		return contacts;
	}
	
	
}
