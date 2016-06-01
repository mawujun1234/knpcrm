package com.mawujun.customer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.mawujun.generator.model.FieldDefine;

/**
 * 联系人
 * @author mawujun qq:16064988 mawujun1234@163.com
 *
 */
@Entity(name="t_contacts")
public class Contacts {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(
	        name = "uuid",
	        strategy = "org.hibernate.id.UUIDGenerator"
	    )
	@FieldDefine(title="id",hidden=true)
	@Column(length=36)
	private String id;
	
	@FieldDefine(title="联系人",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String contacts;
	@FieldDefine(title="职位",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String position;
	@FieldDefine(title="电话",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String tel;
	@FieldDefine(title="手机",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String tel_mobile;
	@FieldDefine(title="聊天账号",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String chatNum;
	@FieldDefine(title="传真",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String fax;
	@FieldDefine(title="电子邮件",hidden=false,genQuery=false,sort=50)
	@Column(length=60,nullable=false)
	private String email;
	
	@Column(length=36)
	private String customer_id;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContacts() {
		return contacts;
	}
	public void setContacts(String contacts) {
		this.contacts = contacts;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getTel_mobile() {
		return tel_mobile;
	}
	public void setTel_mobile(String tel_mobile) {
		this.tel_mobile = tel_mobile;
	}
	public String getChatNum() {
		return chatNum;
	}
	public void setChatNum(String chatNum) {
		this.chatNum = chatNum;
	}
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(String customer_id) {
		this.customer_id = customer_id;
	}
	

}
