import ChannelService from 'libs/ChannelService';
import { CHANNEL_ID_PLUGIN_KEY } from 'libs/config';
import { useEffect } from 'react';

export default function useChannelPluginEffect() {
  useEffect(() => {
    ChannelService.boot({
      pluginKey: CHANNEL_ID_PLUGIN_KEY, // please fill with your plugin key
      //   memberId: "유저ID",
      //   profile: {
      //     name: "유저Name",
      //     email: "유저Email",
      //     id: "유저ID",
      //   },
    });
  }, []);
}
