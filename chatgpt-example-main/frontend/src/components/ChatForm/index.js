import { AudioOutlined, PaperClipOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../../actions/chatActions";
import styles from "./style";
import {useGetChatQuery,useAddChatMutation, useSaveChatMutation,useGetChatdataQuery} from '../../services/chatApi';

const ChatForm = () => {
  const [chatForm] = Form.useForm();
  const messageInputRef = useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.chat);

  // post request to server from rtk query
  const [addChat] =useAddChatMutation();
//  post request to sharepoint
const [saveChat ]=useSaveChatMutation()

         

// press ender button

  const onSubmit = (event) => {

    // const handleSave =()=>{
    //   // e.preventDefault();
    //   console.log('save button clicked');
    //   saveChat({
    //     "Title":"title1",
    //     "EmployeeName":"sruthi",
    //     "LeaveType":"sick leave"
    //   })
     
    //   .then((res)=>{
    //     console.log('saved successfully');
    //     console.log("response after save data to shrepoint",res)
    //   })
    //   .catch((err)=>{
    //     console.log('error while saving data');
    //     console.log(err);
    //   })
    // }
    


    console.log('submit button ender clicked');

    if (!event.target.value) {
      return;
    }
    dispatch(fetchMessage(event.target.value));
    chatForm.resetFields();


    

    // handleSave()
    // console.log(handleSave())
  };

  useEffect(() => {
    if (!loading) {
      // To run in next cycle.
      setTimeout(() => {
        messageInputRef.current.focus();
      }, 0);
    }
  }, [loading]);
  return (
    <Form layout="inline" form={chatForm} name="message-form" style={styles.formStyle}>
      <Form.Item style={styles.inputStyle} name="message">
       
        <Input
          size="large"
          suffix={<PaperClipOutlined />}
          placeholder="type Message here...."
          disabled={loading}
          onPressEnter={onSubmit}
          ref={messageInputRef}
        />
      </Form.Item>
      {/* <Form.Item style={styles.btnStyle} name="sendMsg"> */}
      <div >
        {/* <button  type="submit" onClick={handleSave}> */}
          {/* <AudioOutlined /> */}
          {/* submit */}
        {/* </button > */}
        </div>
      {/* </Form.Item> */}
      {/* testing */}
      {/* <div onClick={handleSubmit}>
      <button type="submit">send</button>
      </div> */}
    </Form>

  );
};
export default ChatForm;
