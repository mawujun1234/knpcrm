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
//@RequestMapping("/customer")
public class CustomerController {

	@Resource
	private CustomerService customerService;


	/**
	 * 这是基于分页的几种写法,的例子，请按自己的需求修改
	 * @author mawujun email:16064988@163.com qq:16064988
	 * @param start
	 * @param limit
	 * @param userName
	 * @return
	 */
	@RequestMapping("/customer/queryPager.do")
	@ResponseBody
	public Pager<Customer> queryPager(Pager<Customer> pager){
		return customerService.queryPage(pager);
	}

	@RequestMapping("/customer/queryAll.do")
	@ResponseBody
	public List<Customer> queryAll() {	
		List<Customer> customeres=customerService.queryAll();
		return customeres;
	}
	

	@RequestMapping("/customer/load.do")
	@ResponseBody
	public Customer load(String id) {
		return customerService.get(id);
	}
	
	@RequestMapping("/customer/create.do")
	@ResponseBody
	public Customer create(@RequestBody Customer customer) {
		customerService.create(customer);
		return customer;
	}
	
	@RequestMapping("/customer/update.do")
	@ResponseBody
	public  Customer update(@RequestBody Customer customer) {
		customerService.update(customer);
		return customer;
	}
	
	@RequestMapping("/customer/deleteById.do")
	//@ResponseBody
	public String deleteById(String id) {
		customerService.deleteById(id);
		return id;
	}
	
	@RequestMapping("/customer/destroy.do")
	@ResponseBody
	public Customer destroy(@RequestBody Customer customer) {
		customerService.delete(customer);
		return customer;
	}
	
	
}
